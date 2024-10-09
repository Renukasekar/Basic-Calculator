function appendToDisplay(value)
{
    document.getElementById('display').value+=value;

}
function clearInput()
{
    document.getElementById('display').value='';
}
function evaluateExpression()
{
    let expression=document.getElementById('display').value;
    try{
        let result=eval(expression);
        document.getElementById('display').value=result;
    }
    catch(error)
    {
        document.getElementById('display').value='Invalid Expression';
    }
}