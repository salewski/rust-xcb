initSidebarItems({"constant":[["MAJOR_VERSION",""],["MINOR_VERSION",""],["VERSION_STRING",""],["XNAME",""]],"enum":[["ChangeDevice",""],["ChangeDevicePropertyItems",""],["ChangeMode",""],["ChangeReason",""],["Device",""],["DeviceChange",""],["DeviceClassData",""],["DeviceClassType",""],["DeviceControl",""],["DeviceCtlData",""],["DeviceInputMode",""],["DeviceStateData",""],["DeviceType",""],["DeviceUse",""],["Error","Unified error type for the Input extension"],["Event","Unified event type for the Input extension"],["EventMode",""],["FeedbackClass",""],["FeedbackCtlData",""],["FeedbackStateData",""],["GetDevicePropertyReplyItems",""],["GrabMode22",""],["GrabOwner",""],["GrabType",""],["HierarchyChangeData",""],["HierarchyChangeType",""],["InputClass",""],["InputInfoInfo",""],["InputStateData",""],["ModifierDevice",""],["NotifyDetail",""],["NotifyMode",""],["PropagateMode",""],["PropertyFlag",""],["PropertyFormat",""],["ScrollType",""],["TouchMode",""],["TouchOwnershipFlags",""],["ValuatorMode",""],["XiChangePropertyItems",""],["XiGetPropertyReplyItems",""]],"fn":[["get_extension_data",""],["prefetch_extension_data",""]],"struct":[["AddMaster",""],["AddMasterBuf",""],["AddMasterIterator",""],["AllowDeviceEvents",""],["AttachSlave",""],["AxisInfo",""],["BarrierFlags",""],["BarrierHitEvent",""],["BarrierReleasePointerInfo",""],["BellFeedbackCtl",""],["BellFeedbackState",""],["ButtonClass",""],["ButtonClassBuf",""],["ButtonClassIterator",""],["ButtonInfo",""],["ButtonPressEvent",""],["ButtonState",""],["ChangeDeviceControl",""],["ChangeDeviceControlCookie","Cookie type for [ChangeDeviceControl]"],["ChangeDeviceControlReply",""],["ChangeDeviceDontPropagateList",""],["ChangeDeviceKeyMapping",""],["ChangeDeviceNotifyEvent",""],["ChangeDeviceProperty",""],["ChangeDevicePropertyItemsParams",""],["ChangeFeedbackControl",""],["ChangeFeedbackControlMask",""],["ChangeKeyboardDevice",""],["ChangeKeyboardDeviceCookie","Cookie type for [ChangeKeyboardDevice]"],["ChangeKeyboardDeviceReply",""],["ChangePointerDevice",""],["ChangePointerDeviceCookie","Cookie type for [ChangePointerDevice]"],["ChangePointerDeviceReply",""],["ClassError",""],["ClassesReportedMask",""],["CloseDevice",""],["DeleteDeviceProperty",""],["DetachSlave",""],["DeviceAbsAreaCtrl",""],["DeviceAbsAreaState",""],["DeviceAbsCalibCtl",""],["DeviceAbsCalibState",""],["DeviceBell",""],["DeviceBusyError",""],["DeviceButtonStateNotifyEvent",""],["DeviceChangedEvent",""],["DeviceClass",""],["DeviceClassBuf",""],["DeviceClassDataParams",""],["DeviceClassIterator",""],["DeviceCoreCtrl",""],["DeviceCoreState",""],["DeviceCtl",""],["DeviceCtlBuf",""],["DeviceCtlDataParams",""],["DeviceCtlIterator",""],["DeviceEnableCtrl",""],["DeviceEnableState",""],["DeviceError",""],["DeviceFocusInEvent",""],["DeviceInfo",""],["DeviceKeyPressEvent",""],["DeviceKeyStateNotifyEvent",""],["DeviceMappingNotifyEvent",""],["DeviceName",""],["DeviceNameBuf",""],["DeviceNameIterator",""],["DevicePresenceNotifyEvent",""],["DevicePropertyNotifyEvent",""],["DeviceResolutionCtl",""],["DeviceResolutionCtlBuf",""],["DeviceResolutionCtlIterator",""],["DeviceResolutionState",""],["DeviceResolutionStateBuf",""],["DeviceResolutionStateIterator",""],["DeviceState",""],["DeviceStateBuf",""],["DeviceStateDataParams",""],["DeviceStateIterator",""],["DeviceStateNotifyEvent",""],["DeviceTimeCoord",""],["DeviceTimeCoordBuf",""],["DeviceTimeCoordIterator",""],["DeviceTimeCoordParams",""],["DeviceValuatorEvent",""],["EnterEvent",""],["EventError",""],["EventMask",""],["EventMaskBuf",""],["EventMaskIterator",""],["FeedbackCtl",""],["FeedbackCtlBuf",""],["FeedbackCtlDataParams",""],["FeedbackCtlIterator",""],["FeedbackState",""],["FeedbackStateBuf",""],["FeedbackStateDataParams",""],["FeedbackStateIterator",""],["Fp3232",""],["GetDeviceButtonMapping",""],["GetDeviceButtonMappingCookie","Cookie type for [GetDeviceButtonMapping]"],["GetDeviceButtonMappingReply",""],["GetDeviceControl",""],["GetDeviceControlCookie","Cookie type for [GetDeviceControl]"],["GetDeviceControlReply",""],["GetDeviceDontPropagateList",""],["GetDeviceDontPropagateListCookie","Cookie type for [GetDeviceDontPropagateList]"],["GetDeviceDontPropagateListReply",""],["GetDeviceFocus",""],["GetDeviceFocusCookie","Cookie type for [GetDeviceFocus]"],["GetDeviceFocusReply",""],["GetDeviceKeyMapping",""],["GetDeviceKeyMappingCookie","Cookie type for [GetDeviceKeyMapping]"],["GetDeviceKeyMappingReply",""],["GetDeviceModifierMapping",""],["GetDeviceModifierMappingCookie","Cookie type for [GetDeviceModifierMapping]"],["GetDeviceModifierMappingReply",""],["GetDeviceMotionEvents",""],["GetDeviceMotionEventsCookie","Cookie type for [GetDeviceMotionEvents]"],["GetDeviceMotionEventsReply",""],["GetDeviceProperty",""],["GetDevicePropertyCookie","Cookie type for [GetDeviceProperty]"],["GetDevicePropertyReply",""],["GetDevicePropertyReplyItemsParams",""],["GetExtensionVersion",""],["GetExtensionVersionCookie","Cookie type for [GetExtensionVersion]"],["GetExtensionVersionReply",""],["GetFeedbackControl",""],["GetFeedbackControlCookie","Cookie type for [GetFeedbackControl]"],["GetFeedbackControlReply",""],["GetSelectedExtensionEvents",""],["GetSelectedExtensionEventsCookie","Cookie type for [GetSelectedExtensionEvents]"],["GetSelectedExtensionEventsReply",""],["GrabDevice",""],["GrabDeviceButton",""],["GrabDeviceCookie","Cookie type for [GrabDevice]"],["GrabDeviceKey",""],["GrabDeviceReply",""],["GrabModifierInfo",""],["GroupInfo",""],["HierarchyChange",""],["HierarchyChangeBuf",""],["HierarchyChangeDataParams",""],["HierarchyChangeIterator",""],["HierarchyEvent",""],["HierarchyInfo",""],["HierarchyMask",""],["InputClassInfo",""],["InputInfo",""],["InputInfoBuf",""],["InputInfoInfoParams",""],["InputInfoIterator",""],["InputState",""],["InputStateBuf",""],["InputStateDataParams",""],["InputStateIterator",""],["IntegerFeedbackCtl",""],["IntegerFeedbackState",""],["KbdFeedbackCtl",""],["KbdFeedbackState",""],["KeyClass",""],["KeyClassBuf",""],["KeyClassIterator",""],["KeyEventFlags",""],["KeyInfo",""],["KeyPressEvent",""],["KeyState",""],["LedFeedbackCtl",""],["LedFeedbackState",""],["ListDeviceProperties",""],["ListDevicePropertiesCookie","Cookie type for [ListDeviceProperties]"],["ListDevicePropertiesReply",""],["ListInputDevices",""],["ListInputDevicesCookie","Cookie type for [ListInputDevices]"],["ListInputDevicesReply",""],["ModeError",""],["ModifierInfo",""],["ModifierMask",""],["MoreEventsMask",""],["OpenDevice",""],["OpenDeviceCookie","Cookie type for [OpenDevice]"],["OpenDeviceReply",""],["PointerEventFlags",""],["PropertyEvent",""],["PtrFeedbackCtl",""],["PtrFeedbackState",""],["QueryDeviceState",""],["QueryDeviceStateCookie","Cookie type for [QueryDeviceState]"],["QueryDeviceStateReply",""],["RawButtonPressEvent",""],["RawKeyPressEvent",""],["RawTouchBeginEvent",""],["RemoveMaster",""],["ScrollClass",""],["ScrollFlags",""],["SelectExtensionEvent",""],["SetDeviceButtonMapping",""],["SetDeviceButtonMappingCookie","Cookie type for [SetDeviceButtonMapping]"],["SetDeviceButtonMappingReply",""],["SetDeviceFocus",""],["SetDeviceMode",""],["SetDeviceModeCookie","Cookie type for [SetDeviceMode]"],["SetDeviceModeReply",""],["SetDeviceModifierMapping",""],["SetDeviceModifierMappingCookie","Cookie type for [SetDeviceModifierMapping]"],["SetDeviceModifierMappingReply",""],["SetDeviceValuators",""],["SetDeviceValuatorsCookie","Cookie type for [SetDeviceValuators]"],["SetDeviceValuatorsReply",""],["StringFeedbackCtl",""],["StringFeedbackCtlBuf",""],["StringFeedbackCtlIterator",""],["StringFeedbackState",""],["StringFeedbackStateBuf",""],["StringFeedbackStateIterator",""],["TouchBeginEvent",""],["TouchClass",""],["TouchEventFlags",""],["TouchOwnershipEvent",""],["UncheckedChangeDeviceControlCookie","Unchecked cookie type for [ChangeDeviceControl]"],["UncheckedChangeKeyboardDeviceCookie","Unchecked cookie type for [ChangeKeyboardDevice]"],["UncheckedChangePointerDeviceCookie","Unchecked cookie type for [ChangePointerDevice]"],["UncheckedGetDeviceButtonMappingCookie","Unchecked cookie type for [GetDeviceButtonMapping]"],["UncheckedGetDeviceControlCookie","Unchecked cookie type for [GetDeviceControl]"],["UncheckedGetDeviceDontPropagateListCookie","Unchecked cookie type for [GetDeviceDontPropagateList]"],["UncheckedGetDeviceFocusCookie","Unchecked cookie type for [GetDeviceFocus]"],["UncheckedGetDeviceKeyMappingCookie","Unchecked cookie type for [GetDeviceKeyMapping]"],["UncheckedGetDeviceModifierMappingCookie","Unchecked cookie type for [GetDeviceModifierMapping]"],["UncheckedGetDeviceMotionEventsCookie","Unchecked cookie type for [GetDeviceMotionEvents]"],["UncheckedGetDevicePropertyCookie","Unchecked cookie type for [GetDeviceProperty]"],["UncheckedGetExtensionVersionCookie","Unchecked cookie type for [GetExtensionVersion]"],["UncheckedGetFeedbackControlCookie","Unchecked cookie type for [GetFeedbackControl]"],["UncheckedGetSelectedExtensionEventsCookie","Unchecked cookie type for [GetSelectedExtensionEvents]"],["UncheckedGrabDeviceCookie","Unchecked cookie type for [GrabDevice]"],["UncheckedListDevicePropertiesCookie","Unchecked cookie type for [ListDeviceProperties]"],["UncheckedListInputDevicesCookie","Unchecked cookie type for [ListInputDevices]"],["UncheckedOpenDeviceCookie","Unchecked cookie type for [OpenDevice]"],["UncheckedQueryDeviceStateCookie","Unchecked cookie type for [QueryDeviceState]"],["UncheckedSetDeviceButtonMappingCookie","Unchecked cookie type for [SetDeviceButtonMapping]"],["UncheckedSetDeviceModeCookie","Unchecked cookie type for [SetDeviceMode]"],["UncheckedSetDeviceModifierMappingCookie","Unchecked cookie type for [SetDeviceModifierMapping]"],["UncheckedSetDeviceValuatorsCookie","Unchecked cookie type for [SetDeviceValuators]"],["UncheckedXiGetClientPointerCookie","Unchecked cookie type for [XiGetClientPointer]"],["UncheckedXiGetFocusCookie","Unchecked cookie type for [XiGetFocus]"],["UncheckedXiGetPropertyCookie","Unchecked cookie type for [XiGetProperty]"],["UncheckedXiGetSelectedEventsCookie","Unchecked cookie type for [XiGetSelectedEvents]"],["UncheckedXiGrabDeviceCookie","Unchecked cookie type for [XiGrabDevice]"],["UncheckedXiListPropertiesCookie","Unchecked cookie type for [XiListProperties]"],["UncheckedXiPassiveGrabDeviceCookie","Unchecked cookie type for [XiPassiveGrabDevice]"],["UncheckedXiQueryDeviceCookie","Unchecked cookie type for [XiQueryDevice]"],["UncheckedXiQueryPointerCookie","Unchecked cookie type for [XiQueryPointer]"],["UncheckedXiQueryVersionCookie","Unchecked cookie type for [XiQueryVersion]"],["UngrabDevice",""],["UngrabDeviceButton",""],["UngrabDeviceKey",""],["ValuatorClass",""],["ValuatorInfo",""],["ValuatorInfoBuf",""],["ValuatorInfoIterator",""],["ValuatorState",""],["ValuatorStateBuf",""],["ValuatorStateIterator",""],["ValuatorStateModeMask",""],["XiAllowEvents",""],["XiBarrierReleasePointer",""],["XiChangeCursor",""],["XiChangeHierarchy",""],["XiChangeProperty",""],["XiChangePropertyItemsParams",""],["XiDeleteProperty",""],["XiDeviceInfo",""],["XiDeviceInfoBuf",""],["XiDeviceInfoIterator",""],["XiEventMask",""],["XiGetClientPointer",""],["XiGetClientPointerCookie","Cookie type for [XiGetClientPointer]"],["XiGetClientPointerReply",""],["XiGetFocus",""],["XiGetFocusCookie","Cookie type for [XiGetFocus]"],["XiGetFocusReply",""],["XiGetProperty",""],["XiGetPropertyCookie","Cookie type for [XiGetProperty]"],["XiGetPropertyReply",""],["XiGetPropertyReplyItemsParams",""],["XiGetSelectedEvents",""],["XiGetSelectedEventsCookie","Cookie type for [XiGetSelectedEvents]"],["XiGetSelectedEventsReply",""],["XiGrabDevice",""],["XiGrabDeviceCookie","Cookie type for [XiGrabDevice]"],["XiGrabDeviceReply",""],["XiListProperties",""],["XiListPropertiesCookie","Cookie type for [XiListProperties]"],["XiListPropertiesReply",""],["XiPassiveGrabDevice",""],["XiPassiveGrabDeviceCookie","Cookie type for [XiPassiveGrabDevice]"],["XiPassiveGrabDeviceReply",""],["XiPassiveUngrabDevice",""],["XiQueryDevice",""],["XiQueryDeviceCookie","Cookie type for [XiQueryDevice]"],["XiQueryDeviceReply",""],["XiQueryPointer",""],["XiQueryPointerCookie","Cookie type for [XiQueryPointer]"],["XiQueryPointerReply",""],["XiQueryVersion",""],["XiQueryVersionCookie","Cookie type for [XiQueryVersion]"],["XiQueryVersionReply",""],["XiSelectEvents",""],["XiSetClientPointer",""],["XiSetFocus",""],["XiUngrabDevice",""],["XiWarpPointer",""]],"type":[["BarrierLeaveEvent",""],["ButtonReleaseEvent",""],["DeviceButtonPressEvent",""],["DeviceButtonReleaseEvent",""],["DeviceFocusOutEvent",""],["DeviceId",""],["DeviceKeyReleaseEvent",""],["DeviceMotionNotifyEvent",""],["EventClass",""],["EventTypeBase",""],["FocusInEvent",""],["FocusOutEvent",""],["Fp1616",""],["KeyCode",""],["KeyReleaseEvent",""],["LeaveEvent",""],["MotionEvent",""],["ProximityInEvent",""],["ProximityOutEvent",""],["RawButtonReleaseEvent",""],["RawKeyReleaseEvent",""],["RawMotionEvent",""],["RawTouchEndEvent",""],["RawTouchUpdateEvent",""],["TouchEndEvent",""],["TouchUpdateEvent",""]]});