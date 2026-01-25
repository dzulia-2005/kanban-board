import {useKanbanContext} from "@/context/hooks/useKanbanContext";
import {ChangeEvent, useCallback, useEffect} from "react";
import debounce from "lodash/debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterHeader = () => {
    const {filters,setFilters} = useKanbanContext();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const clientName = searchParams.get('clientName') || '';
        const minValue = Number(searchParams.get('minValue')) || 0;
        const from = searchParams.get('from') || '';
        const to = searchParams.get('to') || '';

        setFilters({ clientName, minValue, from, to });
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        
        if (filters.clientName) {
            params.set('clientName', filters.clientName);
        } else {
            params.delete('clientName');
        }
        
        if (filters.minValue) {
            params.set('minValue', String(filters.minValue));
        } else {
            params.delete('minValue');
        }
        
        if (filters.from) {
            params.set('from', filters.from);
        } else {
            params.delete('from');
        }
        
        if (filters.to) {
            params.set('to', filters.to);
        } else {
            params.delete('to');
        }

        const queryString = params.toString();
        const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
        
        router.replace(newUrl, { scroll: false });
    }, [filters, pathname, router, searchParams]);

    const debouncedSetClientName = useCallback(
        debounce((value:string)=>{
            setFilters({clientName:value})
        },300), []
    )

    const handleClientChange = (e:ChangeEvent<HTMLInputElement>) => {
        debouncedSetClientName(e.target.value);
    }

    const handleMinValueChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFilters({minValue:Number(e.target.value)});
    }

    const handleToChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFilters({to:e.target.value});
    }

    const handleFromChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFilters({from:e.target.value})
    }

    const handleClearFilters = () => {
        setFilters({clientName:"",minValue:0,from:"",to:""})
    }

    const activeCount = [
        filters.clientName,
        filters.minValue,
        filters.to,
        filters.from,
    ].filter(Boolean).length;

    return (
        <section className="flex flex-wrap gap-2 items-center bg-white p-3 rounded shadow">
            <input
                value={filters.clientName}
                onChange={handleClientChange}
                placeholder="clientName"
                className="border rounded w-40 py-1 px-2"
            />
            <input
                value={Number(filters.minValue)}
                onChange={handleMinValueChange}
                type="number"
                placeholder="Min CHF"
                className="border rounded px-2 py-1 w-28"
            />

            <input
                type="date"
                className="border rounded px-2 py-1"
                value={filters.from||""}
                onChange={handleFromChange}
            />
            <input
                type="date"
                className="border rounded px-2 py-1"
                value={filters.to||""}
                onChange={handleToChange}
            />
            <span className="text-sm text-gray-500 ml-auto">
                 Active filters: {activeCount}
            </span>

            <button
                className="text-sm text-red-600"
                onClick={handleClearFilters}
            >
                Clear filters
            </button>
        </section>
    )
}

export default FilterHeader;