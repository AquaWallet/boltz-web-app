export const download = (file, content) => {
    const hidden = document.createElement("a");
    hidden.download = file;
    hidden.href = content;
    hidden.target = "_blank";
    hidden.click();
};

export const downloadJson = (file, content) => {
    download(
        `${file}.json`,
        `data:application/json;charset=utf-8,${encodeURI(
            JSON.stringify(content),
        )}`,
    );
};
