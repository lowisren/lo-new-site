import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => { 
    if (schemaType === 'post') {
        return S.document().views([
            S.view.form(),
            S.view
                .component(Iframe)
                .options({
                    // Required: async function that returns the URL to be displayed in the iframe
                    // OR string
                    url: `${
                        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                    }/api/preview`,
                    
                    defaultSize: `desktop`,

                    reload: {
                        button: true,
                    },

                    attributes: {},

                })
                .title("Preview"),
        ]);
    }
}