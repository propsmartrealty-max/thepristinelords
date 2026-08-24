import React, { useState, useId } from 'react';
import { Calculator, ShieldCheck, Download, Calendar, DollarSign, PieChart, Sparkles } from 'lucide-react';

interface EmiCalculatorProps {
  onOpenBrochure?: () => void;
  onOpenVipTour: () => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onOpenVipTour }) => {
  const propertyPriceId = useId();
  const downPaymentId = useId();
  const interestRateId = useId();
  const tenureYearsId = useId();

  const [propertyPriceCr, setPropertyPriceCr] = useState<number>(2.57);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);

  const propertyPrice = propertyPriceCr * 10000000;
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;

  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  const monthlyEmi =
    loanAmount > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-pristine-orange font-bold block mb-2 font-google">
            INVESTMENT & MORTGAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            FINANCIAL PLANNING CALCULATOR
          </h2>
          <div className="w-16 h-[2px] bg-pristine-orange mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders Form */}
          <div className="lg:col-span-7 bg-[#fafafa] p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <label htmlFor={propertyPriceId}>PROPERTY VALUE</label>
                <span className="text-pristine-orange font-mono font-bold">₹ {propertyPriceCr.toFixed(2)} CR</span>
              </div>
              <input
                id={propertyPriceId}
                type="range"
                min={2.0}
                max={5.0}
                step={0.05}
                value={propertyPriceCr}
                onChange={(e) => setPropertyPriceCr(parseFloat(e.target.value))}
                className="w-full accent-pristine-orange cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <label htmlFor={downPaymentId}>DOWN PAYMENT ({downPaymentPercent}%)</label>
                <span className="text-gray-900 font-mono">{formatINR(downPayment)}</span>
              </div>
              <input
                id={downPaymentId}
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                className="w-full accent-pristine-orange cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <label htmlFor={interestRateId}>INTEREST RATE (% P.A.)</label>
                <span className="text-gray-900 font-mono">{interestRate}%</span>
              </div>
              <input
                id={interestRateId}
                type="range"
                min={7.0}
                max={12.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full accent-pristine-orange cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-gray-700 mb-2">
                <label htmlFor={tenureYearsId}>LOAN TENURE (YEARS)</label>
                <span className="text-gray-900 font-mono">{tenureYears} YEARS</span>
              </div>
              <input
                id={tenureYearsId}
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                className="w-full accent-pristine-orange cursor-pointer"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-md text-center space-y-5">
            <span className="text-[10px] uppercase tracking-widest text-pristine-orange font-bold block">
              ESTIMATED MONTHLY INSTALLMENT
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
              {formatINR(monthlyEmi)}
              <span className="text-xs text-gray-500 font-sans block mt-1">/ MONTH</span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-left space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>LOAN PRINCIPAL:</span>
                <strong className="text-gray-900 font-mono">{formatINR(loanAmount)}</strong>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>TOTAL INTEREST:</span>
                <strong className="text-gray-900 font-mono">{formatINR(totalInterest)}</strong>
              </div>
              <div className="flex justify-between text-gray-600 pt-1 border-t border-gray-200">
                <span>TOTAL REPAYMENT:</span>
                <strong className="text-pristine-orange font-mono">{formatINR(totalPayment)}</strong>
              </div>
            </div>

            <button
              onClick={onOpenVipTour}
              className="btn-pristine-orange w-full py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-pristine-orange font-bold font-google"
            >
              ENQUIRE FOR CUSTOM PAYMENT PLANS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
