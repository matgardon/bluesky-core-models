namespace bluesky.external.models {

    /** Internal state of the smart-table component. Should not be exposed but is needed for server-side pagination. */
    export interface ITableState {
        sort?: {
            // TODO MGA
            predicate?: any,
            reverse?: boolean,
            functionName?: string
        };

        search?: {
            // TODO MGA
            predicateObject?: any
        };

        pagination?: {
            /** default: 0. */
            start?: number,
            /** default: 0. */
            totalItemCount?: number,
            /** number of items displayed? */
            number?: number,
            /** total number of pages for current collection. */
            numberOfPages?: number
        };
    }

    export interface IStConfig {
        pagination?: {
            /** path to template partial as registered in $templateCache. */
            template?: string,
            /** displayed number of items per page. */
            itemsByPage?: number,
            /** number of pages displayed in the widget to scroll through. */
            displayedPages?: number
        };

        search?: {
            /** in ms. default: 400ms */
            delay?: number,
            /** default: 'input' */
            inputEvent?: string
        };

        select?: {
            /** default: 'single' */
            mode?: string,
            /** default: 'st-selected' */
            selectedClass?: string
        };

        sort?: {
            /** default : 'st-sort-ascent' */
            ascentClass?: string,
            /** Default : 'st-sort-descent' */
            descentClass?: string,
            /** default: false */
            descendingFirst?: boolean,
            /** default: false */
            skipNatural?: boolean,
            /** default: 300 (ms) */
            delay?: number
        };

        pipe?: {
            /** in ms. default: 100ms. */
            delay?: number
        };
    }
}
