import { useState } from 'react';
import { Chart } from 'react-google-charts';

function App() {
  const [data, setData] = useState([
    ['Category', 'Profit'],
    ['Household', 5000],
    ['Cosmetics', 3100],
    ['Clothing', 1500],
    ['Personal care', 1200],
    ['Auto parts', 4000],])

    function generateRandomProfit() {
      return Math.floor(Math.random() * 5000) + 1000; 
    }
  
    function handleDataUpdate() {
      const newData = data.map((entry, index) => {
        if (index === 0) {
          return entry; 
        } else {
          const newProfit = generateRandomProfit();
          return [entry[0], newProfit];
        }
      });
      setData(newData);
    }

    const options = {
      title: 'Profit by Category',
      hAxis: {
        title: 'Category',
      },
      vAxis: {
        title: 'Profit',
      },
      // tooltip: {
      //   trigger: 'none', 
      // },
    };

    const chartEvents = [
      {
        eventName: "select",
        callback({ chartWrapper }) {
          const selectedItems = chartWrapper.getChart().getSelection();
          if (selectedItems.length > 0) {
            const selectedItem = selectedItems[0];
            const row = selectedItem.row + 1;
            const dataPoint = data[row];
            alert(`You clicked on category ${dataPoint[0]} with profit ${dataPoint[1]}`);
        }
        }
      }
    ];

  return (
    <div className='py-10 flex flex-col items-center justify-center'>
      <button 
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={handleDataUpdate}>
        Update Data
      </button>
      <Chart 
        width={'70%'}
        chartType="BarChart"
        data={data}
        options={options}
        chartEvents={chartEvents}
      />
    </div>
  )
      }

export default App























