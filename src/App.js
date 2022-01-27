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
            <Screen image="/1.jpg">
              <Button to="/disclaimer" x="1075" y="1000" w="245" h="110" />
            </Screen>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <Screen image="/2.jpg">
              <Button to="/get-start" x="1075" y="1000" w="245" h="110" />
            </Screen>
          }
        />
        <Route
          path="/get-start"
          element={
            <Screen image="/3.jpg">
              <Button to="/home" x="1005" y="1000" w="380" h="110" />
            </Screen>
          }
        />
        <Route
          path="/home"
          element={
            <Screen image="/4.jpg">
              <Button to="/login" x="1680" y="23" w="217" h="85" />
              <Button to="/home" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/login"
          element={
            <Screen image="/5.jpg">
              <Button to="/dashboard" x="1075" y="840" w="280" h="120" />
              <Button to="/home" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Screen image="/6.jpg">
              <Button to="/home" x="1670" y="23" w="217" h="85" />
              <Button to="/upload" x="1465" y="220" w="420" h="120" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/upload"
          element={
            <Screen image="/7.0.png">
              <Button to="/home" x="1750" y="23" w="237" h="85" />
              <Button to="/upload-metadata" x="1155" y="430" w="599" h="400" />
              <Button to="/upload-data" x="485" y="430" w="599" h="400" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/upload-data"
          element={
            <Screen image="/7.3.jpg">
              <Button to="/home" x="1750" y="23" w="237" h="85" />
              <Button to="/upload" x="990" y="1010" w="195" h="105" />
              <Button to="/review-data" x="1200" y="1010" w="195" h="105" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/review-data"
          element={
            <Screen image="/8.jpg">
              <Button to="/upload-data" x="1227" y="940" w="245" h="90" />
              <Button to="/success" x="965" y="940" w="245" h="90" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/upload-metadata"
          element={
            <Screen image="/7.2.jpg">
              <Button to="/home" x="1750" y="23" w="237" h="85" />
              <Button to="/upload" x="990" y="1010" w="195" h="105" />
              <Button to="/review-metadata" x="1200" y="1010" w="195" h="105" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/review-metadata"
          element={
            <Screen image="/8.jpg">
              <Button to="/upload-metadata" x="1227" y="940" w="245" h="90" />
              <Button to="/success" x="965" y="940" w="245" h="90" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
        <Route
          path="/success"
          element={
            <Screen image="/9.jpg">
              <Button to="/home" x="1670" y="23" w="217" h="85" />
              <Button to="/dashboard" x="1220" y="847" w="460" h="110" />
              <Button to="/upload" x="715" y="847" w="460" h="110" />
              <Button to="/dashboard" x="430" y="23" w="517" h="85" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
