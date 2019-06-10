import { Handler } from "../../../";
import post from "./post";
import page from "./page";
import attachment from "./attachment";

const postType: Handler = async ({ route, params, state, libraries }) => {
  for (let handler of [post, page, attachment]) {
    try {
      await handler({ route, params, state, libraries });
      break;
    } catch (e) {
      // Assume `handler` failed because no entity was found.
      // Continue and try the next handler.
    }
  }
};

export default postType;
