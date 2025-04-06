const date = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate
}

export {date}