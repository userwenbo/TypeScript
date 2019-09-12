function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName('tom'));
console.log(getName(function () { return 'tom'; }));
