// // Math-World Vanialla Javascript
// console.log('Connected')

// const getData = async () => {
//   try {
//     const response = await fetch(`math_world_data/percentage.json`)
//     const data = await response.json()
//     processData(data)
//     //getWords calling...
//   } catch (error) {
//     console.log(error)
//   }
// }

// getData()

// function processData(data) {
//   // let data1 = data.filter((item) => item.length === 1)
//   // console.log(data1)
//   let data2 = data.filter((item) => item.length === 2)
//   // let data3 = data.filter((item) => item.length === 3)
//   // let data4 = data.filter((item) => item.length === 4)

//   data2.map((value) => {
//     let example = document.querySelector('.example')

//     let firstVal = value[0]
//     let secondVal = value[1]
//     let result = firstVal / secondVal

//     // example.innerHTML += `
//     //   <h3>
//     //     Example: Convert
//     //     <span class='intbl'>
//     //       <em>${firstVal}</em>
//     //       <strong>${secondVal}</strong>
//     //     </span>
//     //     to a percentage
//     //   </h3>
//     // `

//     // `Example: Convert ${firstVal} / ${secondVal} to a percentage`
//     // )
//     // heading2.html(
//     //   `First divide ${firstVal} by ${secondVal}:  ${firstVal} / ${secondVal} = ${result}`
//     // )
//     // let result2 = (firstVal / secondVal) * 100 + '%'
//     // heading3.html(`Then multiple by 100%: ${result} * 100% = ${result2}`)
//     // heading4.html(`Answer: ${firstVal}/ ${secondVal} = ${result2}`)
//   })
// }
