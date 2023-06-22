import { mockIonicReact } from "@ionic/react-test-utils"
import "@testing-library/jest-dom/extend-expect"
mockIonicReact()

// Mock matchmedia
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }
