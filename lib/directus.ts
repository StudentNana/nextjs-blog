import { createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("http://0.0.0.0:8055").with(rest());

export default directus;
