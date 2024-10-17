import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import IfELse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import LegacyFunctions from "./LegacyFunctions";
import TemplateLiterals from "./TamplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfELse/>
      <TernaryOperator/>
      <ConditionalOutputIfElse/>
      <ConditionalOutputInline/>
      <LegacyFunctions/>
      <ArrowFunctions/>
      <ImpliedReturn/>
      <TemplateLiterals/>
    </div>
  );
}
