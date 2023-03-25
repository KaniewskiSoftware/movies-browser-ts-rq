import { SecondaryText } from "../../SecondaryText";
import { getYearFromReleaseDate } from "../../../utils/getYearFromDate";

interface RoleAndReleaseProps {
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
  role,
  releaseDate,
  smallText,
}: RoleAndReleaseProps) => {
  if (releaseDate && role) {
    return (
      <SecondaryText $smallText={smallText}>
        {role} ({getYearFromReleaseDate(releaseDate)})
      </SecondaryText>
    );
  }

  if (releaseDate) {
    return (
      <SecondaryText $smallText={smallText}>
        {getYearFromReleaseDate(releaseDate)}
      </SecondaryText>
    );
  }

  if (role) {
    return <SecondaryText $smallText={smallText}>{role}</SecondaryText>;
  }

  return null;
};

export default RoleAndRelease;
