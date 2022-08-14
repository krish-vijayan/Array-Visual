import "./App.css";
import Description from "./components/Description";
import Textbox from "./components/Array";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  Zoom,
  StickyIn,
  FadeIn,
  ZoomIn,
  ZoomOut,
  Move,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const HaveFun = {
  fontSize: "20vw",
  textAlign: "center",
};
const Instructions = {
  fontSize: "2vw",
  width: "50vw",
  textAlign: "center",
};

function App() {
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(55, 40), Fade(), Zoom())}>
            <Description />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h1 style={HaveFun}>HAVE FUN!</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <p style={Instructions}>
              In the following textbox, type exactly "const array = [1];". This
              will declare an array of size 1.
            </p>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator>
            <Textbox />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
