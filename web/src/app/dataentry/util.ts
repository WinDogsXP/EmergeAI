function generateCaseId() {
    const min = 234567;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
