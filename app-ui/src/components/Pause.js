
const sleep = async () => {
    const msec = 7000;
    await new Promise(resolve => {
        return setTimeout(resolve, msec);
    });
};

export default sleep;
