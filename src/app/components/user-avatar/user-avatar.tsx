import * as Avatar from "@radix-ui/react-avatar";
import { User, getSeededPastelColor } from "@domain/user";
import { Tooltip } from "@app/components/tooltip";

export const UserAvatar = ({
  id,
  name,
  image,
  color,
  size = 36,
  tooltip = false,
}: UserAvatarProps): JSX.Element => {
  // Fall back to a color derived from the user's identity (instead of a fresh
  // random one) so a user with no assigned color keeps the same avatar color
  // across re-renders rather than flickering to a new one every time.
  const fallbackColor = color || getSeededPastelColor(id || name);
  const imageMinName = image?.replace(".webp", "-min.webp");
  const imageSrc = size > 80 ? `/avatars/${image}` : `/avatars/${imageMinName}`;
  const imageSize = {
    width: `${size}px`,
    minWidth: `${size}px`,
    height: `${size}px`,
  };
  const acronym = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <Tooltip title={name} show={tooltip}>
      <Avatar.Root className="flex items-center rounded-full" style={imageSize}>
        <Avatar.Image
          className="rounded-full object-cover"
          src={image ? imageSrc : undefined}
          style={imageSize}
          alt={name}
        />
        <Avatar.Fallback
          delayMs={0}
          className="flex items-center justify-center rounded-full text-[var(--Neutral1000)]"
          style={{
            ...imageSize,
            backgroundColor: fallbackColor,
            fontSize: `${size / 2}px`,
          }}
        >
          {acronym}
        </Avatar.Fallback>
      </Avatar.Root>
    </Tooltip>
  );
};

interface UserAvatarProps extends Partial<Pick<User, "id">>, Omit<User, "id"> {
  size?: number;
  tooltip?: boolean;
}
