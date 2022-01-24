import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/01_Introduction.jpg">
              <Button to="/disclaimer" x="1075" y="1000" w="245" h="110" />
            </Screen>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <Screen image="/02_Introduction.jpg">
              <Button to="/get-start" x="1075" y="1000" w="245" h="110" />
            </Screen>
          }
        />
        <Route
          path="/get-start"
          element={
            <Screen image="/03_Introduction.jpg">
              <Button to="/home" x="1005" y="1000" w="380" h="110" />
            </Screen>
          }
        />
        <Route
          path="/home"
          element={
            <Screen image="/04_Main-Page.jpg">
              <Button to="/login" x="1710" y="30" w="180" h="75" />
            </Screen>
          }
        />
        <Route
          path="/login"
          element={
            <Screen image="/05_Login-Page.jpg">
              <Button to="/dashboard" x="1115" y="870" w="170" h="120" />
            </Screen>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Screen image="/06_Your-Dashboard.jpg">
              <Button to="/home" x="1680" y="30" w="220" h="75" />
              <Button to="/upload" x="1535" y="220" w="350" h="120" />
            </Screen>
          }
        />
        <Route
          path="/upload"
          element={
            <Screen image="/07_Upload-Page.jpg">
              <Button to="/home" x="1680" y="30" w="220" h="75" />
              <Button to="/review" x="1165" y="1010" w="225" h="120" />
            </Screen>
          }
        />
        <Route
          path="/review"
          element={
            <Screen image="/08_Upload-Page-Review.jpg">
              <Button to="/upload" x="1222" y="950" w="245" h="90" />
              <Button to="/success" x="965" y="950" w="245" h="90" />
            </Screen>
          }
        />
        <Route
          path="/success"
          element={
            <Screen image="/09_Success-Page.jpg">
              <Button to="/home" x="1680" y="30" w="220" h="75" />
              <Button to="/dashboard" x="910" y="790" w="575" h="110" />
              <Button to="/upload" x="985" y="917" w="430" h="110" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
