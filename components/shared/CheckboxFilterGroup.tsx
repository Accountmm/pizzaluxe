'use client'

import React, { FC } from 'react'
import { Input } from '../ui/input';
import { FilterCheckbox } from './chechbox-filter';
import { Button } from '../ui/button';

interface Props {
  items: FilterChecboxProps[];
  defaultItems: FilterChecboxProps[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

const CheckboxFilterGroup: FC<Props> =
  ({
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Search',
  }) => {
    const [showAllCheckBox, setshowAllCheckBox] = React.useState<boolean>(false)
    const [checkBoxList, setCheckBoxList] = React.useState<FilterChecboxProps[]>([])
    const [searchValue, setSearchValue] = React.useState<string>('')

    React.useEffect(() => {
      const list = showAllCheckBox ? items : defaultItems?.slice(0, limit)
      setCheckBoxList(list)
      setCheckBoxList((checkBoxArr) => checkBoxArr.filter(checkbox => checkbox.text.toLowerCase().includes(searchValue.toLowerCase())))
    }, [showAllCheckBox, searchValue])

    function onChangeSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
      setSearchValue(event.target.value.trim())
    }

    return (
      <>
        <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className={`bg-gray-50 border-none opacity-0 transition  ease-in-out ${showAllCheckBox && 'opacity-100'}`} />
        <div className='flex flex-col gap-3 max-h-96 overflow-auto scrollbar'>
          {
            checkBoxList.map((element, i) => (
              <FilterCheckbox
                key={i}
                text={element.text}
                value={element.value}
                endAdornment={element.endAdornment}
                checked={false}
                onCheckedChange={element.onCheckedChange}
              />

            ))
          }

          {
            items.length > limit && (
              <div className={showAllCheckBox ? 'border-t border-t-neutral-50 mt-4' : ''}>
                <Button variant={'outline'} onClick={() => setshowAllCheckBox((curr) => !curr)} className='text-primary '>
                  {showAllCheckBox ? 'Скрыть' : 'Покозать все'}
                </Button>
              </div>
            )
          }
        </div>
      </>
    )
  }

export default CheckboxFilterGroup