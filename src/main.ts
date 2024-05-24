import "./style.css";
import m from "mithril";
function App(): m.Component {
  return {
    view: () =>
      m(
        "div.app",
        m("header", "Mithril Demo"),
        m("main", "[some content]"),
        m("footer", "Mithril is simple yet powerful")
      ),
  };
}
m.mount(document.body, App);

// function PostList(): m.Component {
//   return {
//     view: () => "Post list",
//   };
// }
// function PostForm(): m.Component {
//   return {
//     view: () => "Post form",
//   };
// }
// function setupRouting(root: Element): void {
//   m.route.prefix = "";

//   m.route(root, "/", {
//     "/": PostList, // list of posts
//     "/posts": PostForm, // form to create a post
//     "/posts/:id": PostForm, // form to update a post
//   });
// }
