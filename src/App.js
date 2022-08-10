import "./App.css";
import Description from "./components/Description";
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

const haveFun = {
  fontSize: "20vw",
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
            <h1 style={haveFun}>HAVE FUN!</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h1>This is where the interative array would go.</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
