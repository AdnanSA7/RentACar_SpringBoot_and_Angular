import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {ChartModule} from "primeng/chart";
import {FormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-financial-expense',
  standalone: true,
  imports: [
    DropdownModule,
    ChartModule,
    FormsModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './financial-expense.component.html',
  styleUrl: './financial-expense.component.css'
})
export class FinancialExpenseComponent {

  timeRangeOptions = [
    { label: 'This Week', value: 'thisWeek' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'This Year', value: 'thisYear' },
  ];
  selectedTimeRange = 'thisYear';

  cashflowData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [12000, 15000, 18000, 20000, 18450, 19500, 22000, 24000, 26000, 25000, 27000, 29000],
        borderColor: '#0d6efd',
        fill: false,
      },
      {
        label: 'Expense',
        data: [8000, 9000, 10000, 14000, 14200, 15000, 16000, 17000, 18000, 19000, 20000, 21000],
        borderColor: '#f03e3e',
        fill: false,
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6c757d',
        },
        grid: {
          drawBorder: false,
          color: 'rgba(108, 117, 125, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#6c757d',
        },
        grid: {
          drawBorder: false,
          color: 'rgba(108, 117, 125, 0.1)',
        },
      },
    },
  };

  expenseBreakdownData = {
    labels: ['Vehicle Maintenance', 'Staff Salaries', 'Fuel', 'Insurance', 'Office Supplies', 'Marketing'],
    datasets: [
      {
        data: [3000, 2500, 2000, 1500, 500, 500],
        backgroundColor: ['#f03e3e', '#0d6efd', '#ffc107', '#20c997', '#6610f2', '#d63384'],
      },
    ],
  };

  expenseBreakdownDetails = [
    { label: 'Vehicle Maintenance', amount: '$3,000' },
    { label: 'Staff Salaries', amount: '$2,500' },
    { label: 'Fuel', amount: '$2,000' },
    { label: 'Insurance', amount: '$1,500' },
    { label: 'Office Supplies', amount: '$500' },
    { label: 'Marketing', amount: '$500' },
  ];

  statusOptions = [
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
  ];
  selectedStatus: string | null = null;

  recentTransactions = [
    {
      expenses: 'Oil Change',
      category: 'Vehicle Maintenance',
      quantity: 1,
      amount: '$100',
      date: '2024-08-01',
      status: 'Completed',
    },
    {
      expenses: 'Office Supplies',
      category: 'Office Supplies',
      quantity: 5,
      amount: '$200',
      date: '2024-08-03',
      status: 'Pending',
    },
  ];

}
