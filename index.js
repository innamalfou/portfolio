let N = +prompt('N=')
let K = +prompt('K=')

for (let i = 0; i < N; i++) {
    alert(i+' '+K)
}

let  A = +prompt('A=')
let B = +prompt('B=')

if (A < B) {
    alert('Error')
} else {
    while (A > B) {
        A -= B
    }
    alert(A)
}
