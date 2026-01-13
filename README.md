This is the reproduction of an issue where a page render is executed while its result is not displayed

## To see the issue

- run the application: `pnpm run dev`
- go to http://localhost:3000/test in a browser
- see 'Not displaying page' displayed which means that the layout did not run its children so the inner page is not displayed
- open the javascript console
- see the 'in page' log which is logged inside the Page component
