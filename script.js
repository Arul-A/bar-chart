fetch('data.json')
.then(response => response.json())
.then(expenseData => {
    const maxAmount = Math.max(...expenseData.map(item => item.amount));
    const chartContainer = document.getElementById('chartbox')
    
    expenseData.forEach(item => {
        const barHeight = (item.amount / maxAmount) * 100;//calculate Bar height

        const barContainer = document.createElement('div'); //creating Bar container
        const barDiv = document.createElement('div');
        const bar = document.createElement('div');
        const p = document.createElement('p')

        const amountDiv = document.createElement('div')

        barContainer.classList.add('flex','flex-col','items-center')
        barDiv.classList.add('h-[150px]','flex','justify-center','items-end');
        bar.classList.add('w-[40px]','rounded-lg','cursor-pointer','relative');
        bar.style.height = barHeight+'%';
        p.classList.add('text-[#A49D97]')
        amountDiv.classList.add('tooltip')

        //conditional background color of ba

        if(item.day === 'wed'){
            bar.classList.add('bg-[#B4DFE5]')
        } else if(item.day === 'thu'){
            bar.classList.add('bg-[#FF9B87]')
        } else {
            bar.classList.add('bg-[#EC755D]')
        }

        p.textContent = item.day;
        amountDiv.textContent = '$'+item.amount;

        bar.addEventListener('mouseover',()=>{
            amountDiv.style.display = 'block'
        })

        bar.addEventListener('mouseout',()=>{
            amountDiv.style.display = 'none'
        })

        barDiv.append(bar)
        barContainer.append(barDiv)
        barContainer.append(p)
        bar.append(amountDiv)
        chartContainer.append(barContainer)
    })
})

