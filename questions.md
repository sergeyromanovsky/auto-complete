What is the difference between Component and PureComponent? give an example where it might break my app.
- PureComponent compares prevProps with currentProps by default, and re-rerenders only if they were changed

Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
- if props were not changed, ShouldComponentUpdate will return false, and therefore will prevent child components to receive updated context value

Describe 3 ways to pass information from a component to its PARENT.
- call a function with arguments, passed from parent
- render children patter
- context api

Give 2 ways to prevent components from re-rendering.
- shouldComponentUpdate returns false in class components
- React.memo, where with custom comparison function return false

What is a fragment and why do we need it? Give an example where it might break my app.
- it's a special React element, which allows us to group multiple elements without adding an redundant HTML element into the DOM tree. In theory, it could break our app if someone relyis on HTML element using `>` selector ( > some css)

Give 3 examples of the HOC pattern.
```
const withStyles = (Component: React.ComponentType) => (props) => <Component {...props} style={{...}} />;
```
```
const withFetchSomething = (WrappedComponent: React.ComponentType) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Fetch data
    }, []);

    return <WrappedComponent data={data} />;
  };
 ```
```
const withLoggedProps = (WrappedComponent: React.ComponentType) => {
    return class extends React.Component {
      componentDidUpdate(prevProps) {
        console.log("Current props", this.props);
        console.log("Prev props: ", prevProps);
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
```
What's the difference in handling exceptions in promises, callbacks and async...await.
- only in syntax

How many arguments does setState take and why is it async.
- 2, second arguments is a function which will be executed after state updates. It's async because React batches state updates to improve performance and user experience

List the steps needed to migrate a Class to Function Component.
- create a function, named with a capital letter
- convert lyfecycle methods into hooks
- remove this

List a few ways styles can be used with components.
- import ./style.(css | scss)
- import styles from ./style.module.(css | scss)
- CSS-in-JS solutions

How to render an HTML string coming from the server.
- using dangerouslySetInnerHTML={{_html: '' }}
- splitting the string into an array of strings, map it, substitute html string tags into jsx tags
