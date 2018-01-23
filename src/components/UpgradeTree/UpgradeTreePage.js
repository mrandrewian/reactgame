import React from 'react';
import Button from '../common/Button';

const UpgradeTreePage = () => {
  return (
    <table class="table table-borderless upgrade-tree-table">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td colspan="3"><Button btnTypes="btn btn-primary btn-block" btnLabel="Dual Wield"/></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td colspan="3"><Button btnTypes="btn btn-primary btn-block vertical-join join-middle triple" btnLabel="Tri Wield"/></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colspan="2"><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-right double" btnLabel="Foo"/></td>
          <td></td>
          <td colspan="2"><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-left double" btnLabel="Bar"/></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Foo"/></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Bar"/></td>
          <td></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Foo"/></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Bar"/></td>
          <td></td>
        </tr>
        <tr>
          <td><Button btnTypes="btn btn-outline-primary btn-block horizontal-join offshoot-left" btnLabel="Foo"/></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Bar"/></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Bar"/></td>
          <td></td>
          <td><Button btnTypes="btn btn-outline-primary btn-block vertical-join join-middle single" btnLabel="Bar"/></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td colspan="3"><Button btnTypes="btn btn-outline-primary btn-block" btnLabel="MEGA"/></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default UpgradeTreePage;
