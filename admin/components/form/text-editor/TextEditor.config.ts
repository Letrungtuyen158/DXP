export const modules = {
    history: {
        delay: 1000,
        maxStack: 100,
        userOnly: false,
    },
    toolbar: [
        ["bold", "italic", "underline"],
        [{ header: [1, 2, false] }],
        [{ list: "bullet" }, { list: "ordered" }],
        [{ align: "" }, { align: "right" }, { align: "center" }, { align: "justify" }],
        ["link", "image"],
        ["undo", "redo"],
    ],
};

export const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
];