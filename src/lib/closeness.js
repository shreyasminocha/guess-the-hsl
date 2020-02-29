function closeness(range, actual, estimate) {
    const delta = Math.abs(estimate - actual);
    return 1 - (delta / range);
}

export default closeness;
