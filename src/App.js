import * as React from "react";
import "./App.scss";
import ProgressBar from "./ProgressBar";

const AppUI = () => {
    const goalAmountofCampaign = 5000;
    const [donateAmount, setDonateAmount] = React.useState(0);
    const [inputValue, setInputValue] = React.useState(0);
    const [completedPercentage, setCompletedPercent] = React.useState(0);
    const [numberOfDonors, setNumberOfDonors] = React.useState(0);
    const [inValid, setInvalid] = React.useState(false)
    let remainingGoalTotal = (goalAmountofCampaign - donateAmount);


    const onChange = (e) => {
        const value = e.target.value;
        let dollarAmount = parseInt(value);

        setInputValue(dollarAmount);

        if (dollarAmount >= 5) setInvalid(false);
      
    };


    const onDonate = (e) => {
        e.preventDefault();

        let totalDonated = (inputValue + donateAmount);
        let progressToGoalpercentage =
            (totalDonated / goalAmountofCampaign) * 100;

        if (inputValue < 5){
            setInvalid(true);
          return
        }


        if (inputValue <= remainingGoalTotal) {
            setDonateAmount(totalDonated);
            setNumberOfDonors(numberOfDonors + 1);
        } else if (remainingGoalTotal === 0) {
            alert("We have reached our Goal! Thank you!");
        } else {
            alert(`Enter a Number Less than ${remainingGoalTotal}`);
        }

        if (progressToGoalpercentage <= 100) {
            setCompletedPercent(progressToGoalpercentage);
        }
    };

    return (
        <>
            <div className="pageContainer">
              <div className="visibleToolTip">
                <div className="toolTipText"><span class="currency">$</span>
<span className="remainingTotal">{remainingGoalTotal}</span> still needed to fund this project</div>
              </div>
                <div className="cardContainer">
                    <ProgressBar completed={completedPercentage} />
                    <div className="contentContainer">
                        <div className="fundingDateHeader">
                            Only four days left to fund this project
                        </div>
                        <div className="fundingDateSubHeader">
                            Join the <span className="donorNumber">{numberOfDonors}</span> other
                            donors who have already supported this project
                        </div>
                        <div className="inputContainer">
                            <span className="currencyLabel">$</span>
                            <input
                                type="number"
                                max={remainingGoalTotal}
                                onChange={onChange}
                                value={inputValue}
                            />
                            <button disabled={inValid} onClick={onDonate}>Give Now</button>
                        </div>
                        {inValid && <div className="invalidText"> ⚠ Amount Must Be At Least $5</div> }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppUI;
