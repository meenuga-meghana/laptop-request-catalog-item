
// OnChangeLaptopType.js
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
    g_form.setDisplay('justification', true);
}
