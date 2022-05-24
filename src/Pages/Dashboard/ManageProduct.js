import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const {
        data: accessories,
        isLoading,
        refetch,
      } = useQuery("available", () =>
        fetch("http://localhost:5000/accessories").then((res) => res.json())
      );
      if (isLoading) {
          return <Loading></Loading>
      }
    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                  accessories.map((accessory,index)=><ProductRow key={accessory._id} accessory={accessory} refetch={refetch} index={index}></ProductRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageProduct;