let grades = [90, 100, 60, 80, 50];

grades = grades.sort(descendingSort);

grades.forEach(print);


function descendingSort(x, y){
    return y - x;
}

grades = [90, 99, 65, 85, 55];

grades = grades.sort(ascendingSort);

grades.forEach(print);


function ascendingSort(x, y){
    return x - y;
}

function print(element){
    console.log(element);
}