import { useEffect, useState } from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useFavorites } from "../../hooks";

import { FavoriteTouchable, Star } from "./styles";

type FavoriteButtonProps = TouchableOpacityProps & {
  city: string;
};

export function FavoriteButton({ city, ...rest }: FavoriteButtonProps) {
  const { add, remove, loading, exists, favorites } = useFavorites();
  const [alreadyIsFavorite, setAlreadyIsFavorite] = useState(false);
  async function handleFavorite() {
    if (alreadyIsFavorite) {
      await remove(city);
    } else {
      await add(city);
    }
  }
  useEffect(() => {
    const verifyExistence = async () => {
      if (await exists(city)) {
        setAlreadyIsFavorite(true);
      } else {
        setAlreadyIsFavorite(false);
      }
    };
    verifyExistence();
  }, [favorites, city]);

  return (
    <FavoriteTouchable
      activeOpacity={0.7}
      disabled={loading}
      {...rest}
      onPress={handleFavorite}
    >
      {loading ? (
        <ActivityIndicator color="black" />
      ) : (
        <Star alreadyIsFavorite={alreadyIsFavorite} />
      )}
    </FavoriteTouchable>
  );
}
