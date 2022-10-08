import dynamic from "next/dynamic";

export const EditorDynamic = dynamic(() => import("./view"), {
  ssr: false,
});
