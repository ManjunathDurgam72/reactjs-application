(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pJEf:function(t,e,s){"use strict";s.r(e),s.d(e,"FxrateDetailsComponent",(function(){return A}));var r=s("QJY3"),n=s("K9Ia"),o=s("ny24"),i=s("bpS4"),a=s("X3+b"),u=s("bl9C"),c=s("Q4XJ"),p=s("8i/E"),l=s("o1uq"),E=s("TYT/"),R=s("n/Vl"),T=s("tTll"),h=s("17Os"),x=s("pUCr"),C=s("eR6E"),S=s("ElpW"),A=function(){function t(t,e,s){this.fxratesService=t,this.formBuilder=e,this.sliderNavigationService=s,this.onDestroy$=new n.a,this.inProgress=!1,this.constants=u.a,this.currencyFormControl=new r.e(this.constants.EMPTY_STRING,[r.u.required]),this.rateFormControl=new r.e(this.constants.EMPTY_STRING,[r.u.required]),this.inputFxRateDetails={},this.alertSuccessObj={icon:this.constants.TOASTR.SUCCESS_CSS,title:this.constants.TOASTR.ALERT_TITLES.SUCCESS_TITLE,text:this.constants.EMPTY_STRING,showCancelButton:this.constants.BOOLEAN.FALSE,confirmButtonText:this.constants.BUTTON_DISPLAY_NAME.OK},this.alertFailureObj={icon:this.constants.TOASTR.ERROR_ICON,title:this.constants.TOASTR.ALERT_TITLES.ERROR_TITLE,text:this.constants.EMPTY_STRING,showCancelButton:this.constants.BOOLEAN.FALSE,confirmButtonText:this.constants.BUTTON_DISPLAY_NAME.OK},this.confirmationCancelObj={icon:this.constants.TOASTR.INFO_CSS,title:this.constants.TOASTR.ALERT_TITLES.INFO_TITLE,text:this.constants.EMPTY_STRING,showCancelButton:this.constants.BOOLEAN.TRUE,confirmButtonText:this.constants.BUTTON_DISPLAY_NAME.CONFIRM},this.fxRateConstants={CURRENCY:"currency",RATE:"rate",CURRENCY_ERR_MSGS:"currencyErrorMessages",RATE_ERR_MSGS:"rateErrorMessages",ADD_TITLE:"Add Fx Rate Details",EDIT_TITLE:"Edit Fx Rate Details"},this.errSrc={currencyErrorMessages:[],rateErrorMessages:[]},this.populateFormGroup()}return t.prototype.ngOnInit=function(){this.inputFxRateDetails=this.fxratesService.getFxRateData(),this.setFxRateTitle=this.inputFxRateDetails&&this.inputFxRateDetails.id?this.fxRateConstants.EDIT_TITLE:this.fxRateConstants.ADD_TITLE},t.prototype.ngOnDestroy=function(){this.onDestroy$.next(),this.onDestroy$.complete()},t.prototype.handleError=function(t){try{this.setErrorMessage(t,c.a.ECODE_MAPPING.FXRATE.INVALID_CURRENCY,this.fxRateConstants.CURRENCY,this.fxRateConstants.CURRENCY_ERR_MSGS),this.setErrorMessage(t,c.a.ECODE_MAPPING.FXRATE.CURRENCY_EXISTS,this.fxRateConstants.CURRENCY,this.fxRateConstants.CURRENCY_ERR_MSGS),this.setErrorMessage(t,c.a.ECODE_MAPPING.FXRATE.INVALID_RATE,this.fxRateConstants.RATE,this.fxRateConstants.RATE_ERR_MSGS)}catch(e){p.a.log(e)}},t.prototype.setErrorMessage=function(t,e,s,r){var n=this;try{t.map((function(t){e.ECODES.map((function(o){t.eCode===o&&(n.errSrc[r].push(e[t.eCode].displayMessage),n.fxRateForm.controls[s].setErrors({invalid:!0}))}))}))}catch(o){p.a.log(o)}},t.prototype.onCancel=function(){try{if(this.inputFxRateDetails&&this.inputFxRateDetails.id){this.setFormControlValueNumeric(this.fxRateConstants.RATE);var t=a.a.clone(this.inputFxRateDetails);delete t.id,a.a.deepEqualObjects(t,this.fxRateForm.value)?this.toggleDrawer():this.openAlert()}else this.fxRateForm.touched&&this.fxRateForm.dirty?this.openAlert():this.toggleDrawer()}catch(e){p.a.log(e)}},t.prototype.openAlert=function(){var t=this;this.confirmationCancelObj.text=this.constants.CONFIRMATION_MESSAGES.DISCARD_CHANGES,i.a.openSweetAlert(this.confirmationCancelObj).then((function(e){e.isConfirmed&&t.toggleDrawer()}))},t.prototype.toggleDrawer=function(){this.fxratesService.sendFxRateData(this.constants.EMPTY_STRING),this.sliderNavigationService.sendDrawerToggle(!1)},t.prototype.setFormControlValueNumeric=function(t){this.fxRateForm.controls[t].setValue(l.a.convertToNumber(this.fxRateForm.get(t).value))},t.prototype.onSubmit=function(){try{if(this.inProgress)return;if(this.fxRateForm.valid){var t={fxRate:this.fxRateForm.value};if(this.resetAllErrorMessages(),this.inputFxRateDetails&&this.inputFxRateDetails.id){var e=a.a.clone(t);delete e.fxRate.currency,this.updateFxRate(this.inputFxRateDetails.id,e)}else this.addFxRate(t)}}catch(s){p.a.log(s)}},t.prototype.addFxRate=function(t){var e=this;try{this.inProgress=!0,this.fxratesService.postFxRate(t).pipe(Object(o.a)(this.onDestroy$)).subscribe((function(t){e.inProgress=!1,e.alertSuccessObj.text=e.constants.FXRATE.INFORMATION_MESSAGES.ADD_FXRATE_SUCCESS,i.a.openSweetAlert(e.alertSuccessObj),e.fxratesService.sendUpdateFxRate(e.constants.EMPTY_STRING),e.toggleDrawer()}),(function(t){e.inProgress=!1,t.error.errList&&t.error.errList.length&&(e.handleError(t.error.errList),e.setGeneralCustomErrMsgs(t.error.errList))}))}catch(s){p.a.log(s)}},t.prototype.updateFxRate=function(t,e){var s=this;try{this.inProgress=!0,this.fxratesService.updateFxRate(t,e).pipe(Object(o.a)(this.onDestroy$)).subscribe((function(t){s.inProgress=!1,s.alertSuccessObj.text=s.constants.FXRATE.INFORMATION_MESSAGES.UPDATE_FXRATE_SUCCESS,i.a.openSweetAlert(s.alertSuccessObj),s.fxratesService.sendUpdateFxRate(s.constants.EMPTY_STRING),s.toggleDrawer()}),(function(t){s.inProgress=!1,t.error.errList&&t.error.errList.length&&(s.handleError(t.error.errList),s.setGeneralCustomErrMsgs(t.error.errList))}))}catch(r){p.a.log(r)}},t.prototype.setGeneralCustomErrMsgs=function(t){var e=this;t.map((function(t){e.constants.ECODE_MAPPING.GENERAL.ECODES.map((function(s){t.eCode===s&&(e.alertFailureObj.text=e.constants.ECODE_MAPPING.GENERAL[s].displayMessage,i.a.openSweetAlert(e.alertFailureObj))})),c.a.ECODE_MAPPING.FXRATE.FXRATE_NOT_FOUND.ECODES.map((function(s){t.eCode===s&&(e.alertFailureObj.text=c.a.ECODE_MAPPING.FXRATE.FXRATE_NOT_FOUND[s].displayMessage,i.a.openSweetAlert(e.alertFailureObj))}))}))},t.prototype.resetAllErrorMessages=function(){this.errSrc.currencyErrorMessages=[],this.errSrc.rateErrorMessages=[]},t.prototype.populateFormGroup=function(){try{this.fxRateForm=this.formBuilder.group({currency:this.currencyFormControl,rate:this.rateFormControl})}catch(t){p.a.log(t)}},t.\u0275fac=function(e){return new(e||t)(E.Qb(R.a),E.Qb(r.d),E.Qb(T.a))},t.\u0275cmp=E.Kb({type:t,selectors:[["app-fxrate-details"]],decls:10,vars:33,consts:[[3,"inputLabelText"],[3,"formGroup"],[3,"inputTextboxLabelName","inputTextboxIconClass","inputTextboxCustomClass","inputFormControlName","inputTextboxHintStart","inputMaxlength","inputValue","inputType","inputErrValueRequiredMessage","inputRegex","inputMatHint","inputTooltip","inputCustomErrMessages","inputPlaceholder"],[3,"inputTextboxLabelName","inputTextboxIconClass","inputPlaceholder","inputRegex","inputTextboxCustomClass","inputFormControlName","inputValue","inputMaxlength","inputTextboxHintStart","inputType","inputErrValueRequiredMessage","inputCustomErrMessages","inputMatHint","inputTooltip"],[1,"row","pt-4"],[1,"col"],[3,"inputButtonText","inputButtonColor","buttonClickEvent"],[1,"col","text-right"],[3,"inputButtonText","buttonClickEvent"]],template:function(t,e){1&t&&(E.Wb(0,"mat-card"),E.Rb(1,"app-label",0),E.Wb(2,"form",1),E.Rb(3,"app-input-textbox",2),E.Rb(4,"app-input-textbox",3),E.Wb(5,"div",4),E.Wb(6,"div",5),E.Wb(7,"app-button",6),E.hc("buttonClickEvent",(function(){return e.onCancel()})),E.Vb(),E.Vb(),E.Wb(8,"div",7),E.Wb(9,"app-button",8),E.hc("buttonClickEvent",(function(){return e.onSubmit()})),E.Vb(),E.Vb(),E.Vb(),E.Vb(),E.Vb()),2&t&&(E.Cb(1),E.rc("inputLabelText",e.setFxRateTitle),E.Cb(1),E.rc("formGroup",e.fxRateForm),E.Cb(1),E.rc("inputTextboxLabelName","Currency")("inputTextboxIconClass","custom-pointer")("inputTextboxCustomClass","form-control")("inputFormControlName",e.currencyFormControl)("inputTextboxHintStart",e.constants.FXRATE.HINT.CURRENCY)("inputMaxlength",50)("inputValue",e.inputFxRateDetails&&e.inputFxRateDetails.currency)("inputType","text")("inputErrValueRequiredMessage",e.constants.FXRATE.REQUIRED_ERRMSG.CURRENCY)("inputRegex",e.constants.REGEX.ALPHABETS_NUMERIC_ONLY)("inputMatHint",!0)("inputTooltip","Currency")("inputCustomErrMessages",e.errSrc.currencyErrorMessages)("inputPlaceholder","Currency"),E.Cb(1),E.rc("inputTextboxLabelName","Rate")("inputTextboxIconClass","custom-pointer")("inputPlaceholder","Rate")("inputRegex",e.constants.REGEX.NUMERIC_ONLY)("inputTextboxCustomClass","form-control")("inputFormControlName",e.rateFormControl)("inputValue",e.inputFxRateDetails&&e.inputFxRateDetails.rate)("inputMaxlength",50)("inputTextboxHintStart",e.constants.FXRATE.HINT.RATE)("inputType","text")("inputErrValueRequiredMessage",e.constants.FXRATE.REQUIRED_ERRMSG.RATE)("inputCustomErrMessages",e.errSrc.rateErrorMessages)("inputMatHint",!0)("inputTooltip","Rate"),E.Cb(3),E.rc("inputButtonText",e.constants.BUTTON_DISPLAY_NAME.CANCEL)("inputButtonColor",e.constants.MATERIAL_COLORS.WARN),E.Cb(2),E.rc("inputButtonText",e.constants.BUTTON_DISPLAY_NAME.SAVE))},directives:[h.a,x.a,r.v,r.p,r.i,C.a,S.a],styles:[""]}),t}()}}]);