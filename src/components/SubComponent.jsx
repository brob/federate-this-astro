import { jsonToSchema } from "@walmartlabs/json-to-simple-graphql-schema/lib";


  export default function SubComponent() {
    window.process = {env: {}}

    console.log(window)

    return (<>
    <h1>hello</h1>
    </>)
    }