export type DropdownContext = {
  handleKeydown: () => void;
  showMenu: (show: boolean) => void;
  registerTrigger: (triggerRef: RcButtonType | null) => void;
  focusFirstElement: () => void;
  isMenuOpen: Ref<boolean>;
}

export const defaultContext: DropdownContext = {
  handleKeydown:     () => null,
  showMenu:          (_show: boolean | null) => null,
  registerTrigger:   (_triggerRef: RcButtonType | null) => null,
  focusFirstElement: () => null,
  isMenuOpen:        ref(false),
  close: () => null,
};

export type DropdownCollection = {
  dropdownItems: Ref<Element[]>;
};

export const defaultCollection: DropdownCollection = { dropdownItems: ref([]) };

