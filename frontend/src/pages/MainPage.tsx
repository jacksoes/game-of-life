import Header from "../components/header/Header";
import DecorativeGrid from "../components/decorative-grid/DecorativeGrid";
import { Button } from "react-bootstrap";

const MainPage = () => {
  const title: string = "John Horton Conway's Game of Life";

  const description: string =
    "The Game of Life is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.";

  return (
    <div className="page-background">
      <div className="w-100 h-50 d-flex  flex-column">
        <Header title={title} description={description} />
      </div>

      <div className="w-100 h-50 d-flex align-items-center flex-column">
        <Button variant="success" aria-label="Start button">
          Get Started
        </Button>
        <DecorativeGrid />
      </div>
    </div>
  );
};

export default MainPage;
