import * as React from "react";
import { Button } from "react";

const Badge = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);
export default Badge;