solution = (arr_val, arr_unit) => {
    const G = 6.67e-11
    const conversion = {
        kg: 1,
        g: 1e-3,
        mg: 1e-6,
        μg: 1e-9,
        lb: .453592,
        m: 1,
        cm: 1e-2,
        mm: 1e-3,
        μm: 1e-6,
        ft: .3048,
    }
    return G * arr_val[0] * conversion[arr_unit[0]] * arr_val[1] * conversion[arr_unit[1]] / Math.pow(arr_val[2] * conversion[arr_unit[2]], 2)
}

solution([1000, 1000, 100], ["g", "kg", "m"])
solution([1000, 1000, 100], ["kg", "kg", "m"])
solution([1000, 1000, 100], ["kg", "kg", "cm"])