import React from 'react'
import Link from 'next/link'


const Pesquisa = () => {

    return (

        <div>
            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
      </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border-solid rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Pesquisa