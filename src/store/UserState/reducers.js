export const onChangePackage=(state,action)=>{
    action.payload.forEach(item => {
        state.newWorkPackage[item.element]=item.value
    });
}
export const onChangePackageMilestone=(state,action)=>{
    action.payload.forEach(item => {
        state.newMilestone[item.element]=element.value
    });
}
export default {onChangePackage};