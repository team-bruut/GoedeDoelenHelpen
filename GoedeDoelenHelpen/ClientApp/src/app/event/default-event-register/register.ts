
type FirstRegisterStep1 = {
    name: string;
};

type FirstRegisterStep2 = FirstRegisterStep1 & {
    surName: string;
};

type FirstRegisterStep3 = FirstRegisterStep2 & {
    foundationName: string;
};

type FirstRegisterStep4 = FirstRegisterStep3 & {
    eventDescription: string;
};

type FirstRegisterStep5 = FirstRegisterStep4 & {
    eventName: string;
};

type FirstRegisterStep6 = FirstRegisterStep5 & {
    eventDate: Date;
};

type FirstRegisterStep7 = FirstRegisterStep6 & {
    profileImage: File;
};




