// I used a mix of styled components and this type of CSS in JS object to showcase my approach on different scenarios.
// In smaller components like these, sometimes its benefitial to just use a small javascript object with the styling you want
// instead of having to create another folder, a styled component, for this one specific use case, with little to no props.
// On a real life, production project I would stick to just one approach because it gets kind of messy using different approaches on larger projects.
// Most likely I would use styled components because of better prop handling and its much easier to handle several states of the component, such as hover, active, focus etc...
export const userImageContainerStyle = {display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}




// On the two lines below, I'm trying to show how I would approach a case where
// we can reuse base styles on other components without having to write the same
// css properties over and over again
export const cursorPointerStyle = {cursor: 'pointer'}
export const userImageBaseStyle = {borderRadius: '80px', ...cursorPointerStyle}