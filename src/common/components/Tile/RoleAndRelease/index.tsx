import { Text } from "../../Text";
import { getYearFromReleaseDate } from "../../../utils/getYearFromDate";

interface RoleAndReleaseProps {
  bigFont?: boolean;
  role?: string;
  releaseDate?: string;
  smallText?: boolean;
}

/**
 * The RoleAndRelease component is used for displaying a role and release year
 * of a movie, TV show, or person's career. It can display role, release year,
 * or both, based on the given props.
 *
 * @param role - (Optional) A string representing the role of a person in a movie or TV show.
 * @param releaseDate - (Optional) A string representing the release date of a movie or TV show.
 * @param smallText - (Optional) A boolean that determines whether the text should be displayed smaller. Default value: false.
 */
const RoleAndRelease = ({
  bigFont,
  role,
  releaseDate,
  smallText,
}: RoleAndReleaseProps) => {
  if (releaseDate && role) {
    return (
      <Text $smallText={smallText} $big={bigFont}>
        {role} ({getYearFromReleaseDate(releaseDate)})
      </Text>
    );
  }

  if (releaseDate) {
    return (
      <Text $smallText={smallText} $big={bigFont}>
        {getYearFromReleaseDate(releaseDate)}
      </Text>
    );
  }

  if (role) {
    return (
      <Text $smallText={smallText} $big={bigFont}>
        {role}
      </Text>
    );
  }

  return null;
};

export default RoleAndRelease;
