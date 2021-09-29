export const onChangePackage = (state, action) => {
  action.payload.forEach(item => {
    state.newWorkPackage[item.element] = item.value;
  });
};

export const onChangePackageMilestone = (state, action) => {
  action.payload.forEach(item => {
    state.newMilestone[item.element] = element.value;
  });
};
export const onHandleWorkPackages = (state, action) => {
  state.supplierWorkPackages = action.payload.supplierWorkPackages;
  state.buyerWorkPackages = action.payload.buyerWorkPackages;
};
export default {
  onChangePackage,
  onChangePackageMilestone,
  onHandleWorkPackages,
};
