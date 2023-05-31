import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity';


const config = defineConfig({
  projectId: "gwkgt2tm",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config


// gwkgt2tm