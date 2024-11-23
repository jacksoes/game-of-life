
import { Container } from "react-bootstrap";
const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Container className="mt-4">
      <h1 className="display-1 text-center mb-4">{title}</h1>
      <h1 className=" text-center">{description}</h1>
    </Container>
  );
};

export default Header;
